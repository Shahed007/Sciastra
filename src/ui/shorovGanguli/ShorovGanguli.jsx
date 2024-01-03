import { Container, Grid, Typography } from "@mui/material";

const ShorovGanguli = () => {
  return (
    <section className="my-20">
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <video className="rounded-md" controls autoPlay loop muted>
              <source src="https://www.sciastra.com/Assets/newAssets/Sourav-Goungly-outro-new-logo.mp4"></source>
            </video>
          </Grid>
          <Grid item xs={12} md={6} >
            <div >
              <Typography
                variant="h3"
                component="h3"
                textAlign="right"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: "1.6rem",
                    md: "3rem",
                  },
                  textAlign: { md: "right", xs: "center" },
                  background: "linear-gradient(to right, #A355DC, #344FB6)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Sourav Ganguly's Message
              </Typography>
            </div>
            <Typography
              variant="small"
              component="p"
              sx={{
                width: { md: "70%" },
                ml: { md: "auto" },
                color: "#6F7789",
                fontWeight: "600",
                mt: { sm: "2rem", xs: "1.2rem" },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              A good teacher is like a candle, it consumes itself to light the
              way for others.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ShorovGanguli;
