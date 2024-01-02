import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";

const MoreOption = () => {
  return (
    <section className="my-20">
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "2rem",
              md: "4rem",
            },
            textAlign: "center",
            background: "linear-gradient(to right, #A355DC, #344FB6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          More Options Than JEE & NEET
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ my: "4rem" }}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            px: "1rem",
          }}
        >
          <Grid item sm={6} md={6}>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { md: "2rem" },
              }}
            >
              <ListItemText>
                <Typography variant="h6" component="h3" sx={{ xs: "16px" }}>
                  IISc Bengaluru, IIT Madras & 7 IISERs
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography variant="h6" component="h3">
                  NISER Bhubaneswar & CEBS Mumbai
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography variant="h6" component="h3">
                  ISI & CMI
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography variant="h6" component="h3">
                  IACS
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item sm={6} md={6}>
            <List
              sx={{ display: "flex", flexDirection: "column", gap: ".2rem" }}
            >
              <ListItem>
                <Button
                  sx={{
                    textTransform: "none",
                    background: "linear-gradient(to left, #344FB6 , #A355DC )",
                    px: "3rem",
                    py: "10px",
                    borderRadius: "20rem",
                    color: "white",
                  }}
                >
                  IAT Exam
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    textTransform: "none",
                    background: "linear-gradient(to left, #344FB6 , #A355DC )",
                    px: "2.6rem",
                    py: "10px",
                    borderRadius: "20rem",
                    color: "white",
                  }}
                >
                  NEST Exam
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    textTransform: "none",
                    background: "linear-gradient(to left, #344FB6 , #A355DC )",
                    px: "2.2rem",
                    py: "10px",
                    borderRadius: "20rem",
                    color: "white",
                  }}
                >
                  ISI/CMI Exam
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    textTransform: "none",
                    background: "linear-gradient(to left, #344FB6 , #A355DC )",
                    px: "2.6rem",
                    py: "10px",
                    borderRadius: "20rem",
                    color: "white",
                  }}
                >
                  UPST Exam
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MoreOption;
