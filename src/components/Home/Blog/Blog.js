import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentIcon from "@mui/icons-material/Comment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../../Redux/Slices/blogSlice";

const Blog = () => {
  // calling redux thunk to get data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.status);

  return (
    <Box>
      <Container sx={{ mb: 5 }}>
        {/* blog area title here  */}
        <Typography
          variant="h4"
          sx={{ marginTop: "50px", fontWeight: 800, py: 4 }}
        >
          From The Blog
        </Typography>
        {/* blog area grid system and main content start here  */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {loading === "pending" ? (
            <Box sx={{ margin: "50px 0px" }}>
              <Grid
                container
                spacing={{ xs: 5, md: 6 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
              >
                {blogs.map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: "100%", height: "250px" }}
                    />
                    <Skeleton sx={{ m: "10px 0px" }} width="50%" variant="p" />
                    <Skeleton sx={{ m: "10px 0px" }} width="80%" variant="h2" />
                    <Skeleton
                      sx={{ m: "10px 0px", py: 2 }}
                      width="100%"
                      variant="p"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            blogs?.map((blog) => (
              <Grid item xs={12} sm={12} md={4}>
                <Card sx={{ textAlign: "start", boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={blog.img}
                    alt="image"
                  />
                  <CardContent sx={{ px: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        py: 1.5,
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#6F6F6F",
                        }}
                      >
                        <CalendarTodayIcon sx={{ fontSize: "16px", pr: 0.5 }} />{" "}
                        {blog.date}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          px: 2,
                          color: "#6F6F6F",
                        }}
                      >
                        <CommentIcon sx={{ fontSize: "16px", pr: 0.5 }} />{" "}
                        {blog.comments.length}
                      </Typography>
                    </Box>
                    <Typography
                      gutterBottom
                      variant="p"
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ py: 1.4 }}
                    >
                      {blog.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
