import React, { useState } from "react";
import { Heart, MessageCircle, Share2, Send, User } from "lucide-react";

export default function CommunitySection() {
  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "John Doe", avatar: "👨‍💻" },
      content:
        "Just finished working on an amazing React project! The feeling when everything clicks together is incredible. 🚀",
      likes: 12,
      comments: [
        {
          user: "Sarah",
          text: "Congratulations! What kind of project was it?",
        },
        { user: "Mike", text: "React is awesome! Keep it up!" },
      ],
      liked: false,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: { name: "Emma Wilson", avatar: "👩‍🎨" },
      content:
        "Beautiful sunset today! Nature never fails to inspire my designs. What inspires you in your creative work?",
      likes: 24,
      comments: [
        {
          user: "Alex",
          text: "Beautiful! I get inspired by music and coffee shops",
        },
      ],
      liked: true,
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      user: { name: "Alex Chen", avatar: "👨‍🔬" },
      content:
        "Learning something new every day is what keeps me motivated. Today I dove into machine learning basics!",
      likes: 18,
      comments: [],
      liked: false,
      timestamp: "6 hours ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [commentInputs, setCommentInputs] = useState({});
  const [showComments, setShowComments] = useState({});

  // Handle creating a new post
  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        user: { name: "You", avatar: "😊" },
        content: newPost,
        likes: 0,
        comments: [],
        liked: false,
        timestamp: "Just now",
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  // Handle liking a post
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  // Handle adding a comment
  const handleComment = (postId) => {
    const commentText = commentInputs[postId];
    if (commentText && commentText.trim()) {
      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, { user: "You", text: commentText }],
            };
          }
          return post;
        })
      );
      setCommentInputs({ ...commentInputs, [postId]: "" });
    }
  };

  // Handle sharing a post
  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: `${post.user.name}'s post`,
        text: post.content,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(`${post.user.name}: ${post.content}`);
      alert("Post copied to clipboard!");
    }
  };

  // Toggle comments visibility
  const toggleComments = (postId) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId],
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:flex-1">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white">
              😊
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <div className="flex justify-end mt-3">
                <button
                  onClick={handleCreatePost}
                  disabled={!newPost.trim()}
                  className="px-6 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/95 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-blue-50 rounded-lg shadow-sm">
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                    {post.user.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {post.user.name}
                    </h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Actions */}
              <div className="px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Like Button */}
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                        post.liked
                          ? "text-red-500"
                          : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          post.liked ? "fill-current" : ""
                        }`}
                      />
                      <span className="text-sm">{post.likes}</span>
                    </button>

                    {/* Comment Button */}
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments.length}</span>
                    </button>
                  </div>

                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(post)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors cursor-pointer"
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              {showComments[post.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  {/* Existing Comments */}
                  <div className="space-y-3 mt-4 mb-4">
                    {post.comments.map((comment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-lg p-3">
                          <p className="font-semibold text-sm text-gray-700">
                            {comment.user}
                          </p>
                          <p className="text-gray-800">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Comment */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      😊
                    </div>
                    <div className="flex-1 flex space-x-2">
                      <input
                        type="text"
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs({
                            ...commentInputs,
                            [post.id]: e.target.value,
                          })
                        }
                        placeholder="Write a comment..."
                        className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleComment(post.id)
                        }
                      />
                      <button
                        onClick={() => handleComment(post.id)}
                        className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/4 space-y-4">
        {/* Trending Posts */}
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold text-primary mb-4">
            🔥 Trending Posts
          </h2>
          <div className="space-y-2">
            {[
              { tag: "#ResponsiveDesign", count: 12 },
              { tag: "#NextJS", count: 8 },
              { tag: "#TailwindCSS", count: 15 },
              { tag: "#ReactTips", count: 9 },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-3 rounded-lg bg-white transition"
              >
                <span className="font-medium text-gray-800">{item.tag}</span>
                <span className="text-sm text-gray-500">
                  {item.count} posts
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Active Users */}
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold text-primary mb-4">
            👥 Most Active
          </h2>
          <div className="space-y-3">
            {[
              { name: "Sefat", posts: 24 },
              { name: "Ugo", posts: 18 },
              { name: "Aisha", posts: 15 },
              { name: "David", posts: 11 },
            ].map((user, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white transition"
              >
                <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.posts} posts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
