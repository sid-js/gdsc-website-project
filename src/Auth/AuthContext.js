import React, { useState, createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";
import {
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  collection,
  Timestamp,
  serverTimestamp,
  query,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { toast } from "react-toastify";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      }

      console.log(currentuser);
    });
  });
  const logOut = async () => {
    const res = await signOut(auth);
    toast.error("You have logged out.");
    setUser(null);
  };
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    toast.error("Post Deleted");
  };
  const addPost = async (title, content, user) => {
    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      content: content,
      author: {
        displayName: user.displayName,
        uid: user.uid,
        avatar: user.photoURL,
      },
      createdAt: serverTimestamp(),
    })
      .then((res) => {
        console.log("Post published");
        toast.success("Post published");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Error occured while creating post. Please try again or refresh the page."
        );
      });
  };
  const fetchInitialPosts = async () => {
    try {
      const postsquery = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(6)
      );
      const postsnapshot = await getDocs(postsquery);
      const lastkey = postsnapshot.docs[postsnapshot.docs.length - 1];
      let posts = [];
      postsnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          author: doc.data().author,
          createdAt: doc.data().createdAt.toDate(),
        });
      });
      return { posts, lastkey };
    } catch (error) {
      console.log(error);
    }
  };
  const fetchNewPosts = async (lastkey) => {
    try {
      const postsquery = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(6),
        startAfter(lastkey)
      );
      const postsnapshot = await getDocs(postsquery);
      const newkey = postsnapshot.docs[postsnapshot.docs.length - 1];
      let newposts = [];
      postsnapshot.forEach((doc) => {
        newposts.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          author: doc.data().author,
          createdAt: doc.data().createdAt.toDate(),
        });
      });
      return { newposts, newkey };
    } catch (error) {
      console.log(error);
    }
  };
  const provider = new GoogleAuthProvider(auth);
  const signIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      console.log(res.user);
      toast.success("You have successfully logged in.");
    });
    return 0;
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        addPost,
        fetchInitialPosts,
        fetchNewPosts,
        logOut,
        deletePost,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
