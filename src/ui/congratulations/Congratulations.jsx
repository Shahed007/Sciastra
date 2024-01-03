import { Container, Grid, Paper, Typography } from "@mui/material";

const Congratulations = () => {
  return (
    <section className="my-20">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Grid
                container
                spacing={2}
                sx={{
                  padding: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <Grid item xs={6}>
                  <Typography
                    variant="h4"
                    component="h6"
                    className="dancing-script"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      fontStyle: "italic",
                      textAlign: "center",
                      mb: "16px",
                    }}
                  >
                    Congratulations!
                  </Typography>
                  <img
                    src="https://www.sciastra.com/Assets/newAssets/rank1person.webp"
                    alt=""
                  />
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
                      fontSize: { md: "3rem", xs: "2rem" },
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
                      fontSize: { md: "10rem", xs: "3rem" },
                      fontFamily: "serif",
                    }}
                  >
                    1
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h4"
                    textAlign="center"
                    sx={{
                      fontWeight: "700",
                      color: "#354364",
                    }}
                  >
                    Adarsh V
                  </Typography>
                  <Typography textAlign="center" variant="body1" component="p">
                    In unreserved Catagory
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Grid
                container
                spacing={2}
                sx={{
                  paddingBottom: ".7rem",
                  paddingTop: "1rem",
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                }}
              >
                <Grid item xs={6}>
                  <Typography
                    variant="h4"
                    component="h6"
                    className="dancing-script"
                    sx={{
                      background: "linear-gradient(to right, #A355DC, #344FB6)",
                      backgroundClip: "text",
                      color: "transparent",
                      fontStyle: "italic",
                      textAlign: "center",
                      mb: "16px",
                    }}
                  >
                    Congratulations!
                  </Typography>
                  <img
                    src="https://www.sciastra.com/Assets/newAssets/dhriti.webp"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
                    IISER PUNE
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h4"
                    textAlign="center"
                    sx={{
                      fontWeight: "700",
                      color: "#354364",
                    }}
                  >
                    Dhritiraj
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Congratulations;
