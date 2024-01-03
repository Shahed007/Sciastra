import { Container, Grid } from "@mui/material";

import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

const Offer = () => {
  return (
    <section className="my-12">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs="12" md="6" lg="4">
            <Card
              sx={{
                display: "flex",
                background: "linear-gradient(to left, #344FB6, #A355DC)",
                borderBottomRightRadius: "2rem",
                borderTopLeftRadius: "2rem",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <img
                    src="https://www.sciastra.com/Assets/newAssets/scientist.webp"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: { xs: "2rem", sm: "0rem" },
                    pb: { xs: "1rem", sm: "0rem" },
                  }}
                >
                  <Typography variant="h5" component="h5" color="white">
                    Zero/Minimum Fees
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs="12" md="6" lg="4">
            <Card
              sx={{
                display: "flex",
                background: "linear-gradient(to left, #344FB6, #A355DC)",
                borderBottomRightRadius: "2rem",
                borderTopLeftRadius: "2rem",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img
                    src="https://www.sciastra.com/Assets/newAssets/brain.webp"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: { xs: "2rem", sm: "0rem" },
                    pb: { xs: "1rem", sm: "0rem" },
                  }}
                >
                  <Typography variant="h5" component="h5" color="white">
                    Full Scholarship (Rs. 4 Lakhs)
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs="12" md="6" lg="4">
            <Card
              sx={{
                display: "flex",
                background: "linear-gradient(to left, #344FB6, #A355DC)",
                borderBottomRightRadius: "2rem",
                borderTopLeftRadius: "2rem",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img
                    className="h-full w-full"
                    src="https://www.sciastra.com/Assets/newAssets/mentor.webp"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: { xs: "2rem", sm: "0rem" },
                    pb: { xs: "1rem", sm: "0rem" },
                  }}
                >
                  <Typography variant="h5" component="h5" color="white">
                    Top International Ph.D Placements
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Offer;
