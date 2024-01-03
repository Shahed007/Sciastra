import { Container, Grid, Typography } from "@mui/material";

const AtSciAstra = () => {
  return (
    <section className="my-20">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item sx={12} md={6}>
            <video controls autoPlay loop muted>
              <source src="https://www.sciastra.com/Assets/newAssets/Top-Indian%20Institutes-without%20JEE-&-NEET-%20ZERO-Fee-4-Lakhs-Scholarship.mp4"></source>
            </video>
          </Grid>
          <Grid item sx={12} md={6}>
            <div>
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
                At SciAstra
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
              we make students love science & prepare all 4 subjects- PCMB. You
              can crack IAT, NEST, JEE, NEET, Boards & so on.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AtSciAstra;
