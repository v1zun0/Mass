import React, { useState } from "react";
import { FaPaperPlane, FaRetweet, FaRegComment, FaRegHeart, FaHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { Card, Button, Image, Row, Col } from "react-bootstrap";

const images = require.context("../img", true);

// Komponen untuk form komentar
const CommentForm = () => {
  const [comment, setComment] = useState(""); // State untuk menyimpan komentar

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim komentar ke server atau lakukan yang lainnya sesuai kebutuhan
    console.log("Komentar:", comment);
    setComment(""); // Kosongkan input setelah mengirim komentar
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form" style={{ display: "flex", justifyContent: "center" }}>
      <textarea value={comment} onChange={handleChange} placeholder="Tambahkan komentar..." rows="3" style={{ marginRight: "10px" }} />
      {/* Ganti teks "Kirim" dengan ikon pesawat kertas */}
      <Button variant="primary" size="sm" className="submit-button" type="submit">
        <FaPaperPlane /> {/* Tambahkan ikon pesawat kertas */}
      </Button>
    </form>
  );
};

const PostCard = ({ title, content }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false); // State untuk bookmark
  const [showCommentForm, setShowCommentForm] = useState(false); // State untuk menampilkan form komentar

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <Image src={images("./profilarkan.png")} roundedCircle width={50} height={50} alt="User" />
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <h5 className="mb-0">Arkananta Althaf</h5>
              <MdVerified className="text-primary ml-2" />
            </div>
            <small className="text-muted">@arkanantaalthaf</small>
          </Col>
        </Row>
        <h1 style={{ fontSize: "15px", fontWeight: "normal" }}>{content}</h1>
        <div className="inner-card mb-3">
          <div style={{ gap: "5px", marginTop: "5px" }} className="d-flex align-items-center">
            <LuClipboardList className="teks1 inner-post-card-icon mr-2" size={30} />
            <h1 style={{ fontSize: "25px" }} className="teks1 mb-0">
              {title}
            </h1>
          </div>
          <p style={{ fontSize: "12px", fontWeight: "normal", marginTop: "10px" }} className="teks1">
            Ini list novel yang lagi, belum, dan akan dibaca. Selamat melihat!
          </p>
          <Button variant="primary" className="mt-2" style={{ width: "30%", height: "40%", borderRadius: "10px", border: "solid 1px", color: "white", marginLeft: "70%" }}>
            Open
          </Button>
          <p className="teks1 mt-2" style={{ fontSize: "10px" }}>
            Created on 05-18-2024 | 20.00
          </p>
        </div>
        <div className="d-flex justify-content-between">
          {/* Ubah ikon bookmark saat di-klik */}
          {bookmarked ? <FaBookmark className="post-card-icon text-warning" size={20} onClick={handleBookmark} /> : <FaRegBookmark className="post-card-icon" size={18} onClick={handleBookmark} />}
          <FaRetweet className="post-card-icon" size={18} />
          <FaRegComment className="post-card-icon" size={18} onClick={toggleCommentForm} />
          {liked ? <FaHeart className="post-card-icon text-danger" size={20} onClick={handleLike} /> : <FaRegHeart className="post-card-icon" size={18} onClick={handleLike} />}
        </div>
        {/* Menampilkan form komentar saat tombol komentar diklik */}
        {showCommentForm && <CommentForm />}
      </Card.Body>
    </Card>
  );
};

export default PostCard;
