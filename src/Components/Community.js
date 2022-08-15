import React from "react";
import { useContext, useState, useEffect } from "react";
import { CommunityHero, PostCard, ProfileCard } from "./Community/index";
import { UserAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-daisyui";
import { TextField, LinearProgress } from "@mui/material";
import { IoCreateOutline } from "react-icons/io5";
import {TbRefresh} from "react-icons/tb";
import { toast } from "react-toastify";
import FadingLoader from "./FadingLoader";
import ProfileLoader from "./ProfileLoader";

const Community = () => {
  const { user, addPost, fetchInitialPosts, fetchNewPosts, deletePost } =
    UserAuth();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [postContent, setContent] = useState("");
  const handlePostSubmit = async () => {
    setLoading(true);
    setProgress(true);
    if (title == "" || postContent == "") {
      toast.error("Post title or content cannot be blank");
    } else {
      const res = await addPost(title, postContent, user);
      setmodalOpen(false);
      setProgress(false);
      setLoading(false);
      fetchfirst();
      setTitle("");
      setContent("");
    }
  };
  const [showDelete, setshowDelete] = useState(false);
  const [delID, setdelID] = useState("");
  const setDel = (id) => {
    setdelID(id);
    setshowDelete(true);
  };

  const handleDelete = async () => {
    await deletePost(delID);
    setshowDelete(false);
    fetchfirst();
  };
  const [posts, setPosts] = useState([]);
  const [postkey, setKey] = useState({});
  const [postupdated, setpostupdated] = useState(false);
  const getMore = async () => {
    if (postkey.length > 0) {
      const { newposts, newkey } = await fetchNewPosts(postkey);
      setPosts((posts) => [...posts, ...newposts]);
      setKey(newkey);
      console.log(posts);
    } else {
      console.log("Post Limit reached");
    }
  };
  const fetchfirst = async () => {
    setLoading(true);
    const { posts, lastkey } = await fetchInitialPosts();
    setPosts(posts);
    setKey(lastkey);
    setLoading(false);
    console.log("Initial", posts);
  };
  useEffect(() => {
    fetchfirst();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <CommunityHero />
      <Modal
        className=""
        open={showDelete}
        onClickBackdrop={() => {
          setshowDelete(false);
        }}
      >
        <Modal.Header className="font-bold">Delete this post</Modal.Header>

        <Modal.Body>
          <p className="text-xl">Are you sure you want to delete this post ?</p>
          <br />
          <div className="flex flex-row gap-3">
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
            <Button
              onClick={() => {
                setshowDelete(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="flex-row flex max-w-full md:max-w-[100%] justify-evenly py-7 items-start gap-x-10">
        <div className="w-full drop-shadow-md" >
            <img src="/community-banner.png" alt="banner" className="rounded-lg"/>
        </div>
        <div
          id="main-layout"
          className="flex flex-col justify-center w-[350px] md:w-[600px] items-center"
        >
          <div className="flex flex-row justify-between items-center w-full py-3 text-2xl border-b-slate-200 border-b gap-4">
            <p>Community Posts</p>
            <div className="flex flex-row gap-x-4 items-center">
                <TbRefresh onClick={fetchfirst} className="cursor-pointer hover:text-blue-400"/>
                <button
              onClick={() => {
                setmodalOpen(true);
              }}
              className="drop-shadow-md bg-blue-500 rounded-lg px-3 py-1 text-white text-lg hover:bg-blue-400 hover:scale-110 duration-200 hover:drop-shadow-2xl"
            >
              {" "}
              + Create New
            </button>
            </div>
            
            <Modal
              className=""
              open={modalOpen}
              onClickBackdrop={() => {
                setmodalOpen(false);
              }}
            >
              <Modal.Header className="font-bold">Create a Post</Modal.Header>

              <Modal.Body>
                {!user ? (
                  <div>
                    You are not signed in. Please sign-in to post on our
                    community.
                    <br />
                    <button
                      onClick={() => {
                        navigate("/auth/login");
                      }}
                      className="rounded-lg bg-blue-500 px-4 py-1 text-white mx-1 my-3 "
                    >
                      Sign In
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col py-2 gap-3 justify-start items-stretch w-[90%]">
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      required
                      fullWidth
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <TextField
                      id="outlined-textarea"
                      label="Post Content"
                      placeholder="Heyy, I'm a developer"
                      multiline
                      minRows={2}
                      maxRows={10}
                      required
                      fullWidth
                      value={postContent}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                    <Button onClick={handlePostSubmit} color="primary">
                      <IoCreateOutline />
                      Post
                    </Button>
                    {progress ? <LinearProgress /> : <></>}
                  </div>
                )}
              </Modal.Body>
            </Modal>
          </div>
          <div className="py-4 flex-col flex gap-3">
            {loading ? <FadingLoader /> : <></>}
            {posts.map((post) => {
              return (
                <PostCard
                  setDel={setDel}
                  id={post.id}
                  post={post}
                  user={user}
                />
              );
            })}
            {loading ? (
              <></>
            ) : (
              <Button onClick={getMore} color="primary">
                Load More
              </Button>
            )}
          </div>
        </div>
        {user ? (
            loading?<ProfileLoader/>:<ProfileCard user={user} />
        )
         : <></>}
      </div>
    </div>
  );
};

export default Community;
