import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container, Grid, Paper, Typography } from "@mui/material";
const Successful = () => {
  return (
    <section className="my-20">
      <Container maxWidth="lg">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mb-10 pb-10"
        >
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/sakshi7.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Sakshi Ghoash
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    7
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    IACS-UPST
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/debi10.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Debi Prasad
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    7
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    IACS-UPST
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/rajvardhan15.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Rajvardhan Singh
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    15
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    ISI Bangaluru
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/somjit16.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Somjit Chattopadhyay
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    IACS 2023
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/ashutosh16.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Ashutosh Rath
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    NEST 2023
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/shouvik18.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Shouvik Datta
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "1.4rem", xs: "2rem" },
                    }}
                  >
                    IISC Bangaluru
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <Paper className="p-4">
              <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center">
                  <img
                    className="h-44 w-44 object-cover"
                    src="https://www.sciastra.com/Assets/newAssets/carousel/ishika23.webp"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="h6"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#354364",
                    }}
                  >
                    Deonta Kalita
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "3rem", xs: "1.6rem" },
                    }}
                  >
                    AIR
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "4rem", xs: "1.8rem" },
                      fontFamily: "serif",
                    }}
                  >
                    20
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: { md: "2rem", xs: "1.4rem" },
                    }}
                  >
                    IAT 2023
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Successful;
