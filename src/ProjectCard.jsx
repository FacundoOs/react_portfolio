import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  CardContent,
  CardMedia,
  Card,
  Box,
  Avatar,
} from "@material-ui/core/";
import { GitHub, Share } from "@material-ui/icons/";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import TextInfoContent from "@mui-treasury/components/content/textInfo";

const useStyles = makeStyles(() => ({
  root: {
    height: 390,
    maxWidth: 304,
    margin: 6,
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
}));

const ProjectCard = ({ projects }) => {
  // React.memo(function PostCard() {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  // const handleClick = () => {
  //   window.location.href="https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press";

  // }
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={projects.image} />
      <Avatar className={cardStyles.avatar} src={"src/assets/undraw_programming_2svr.png"} />
      {/* <Avatar className={cardStyles.avatar} src={"https://i.pravatar.cc/300"} /> */}
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={projects.name}
          body={projects.description}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <a target="_blank" href={projects.link}>
          <IconButton color="secondary">
            <Share />
          </IconButton>
          <IconButton color="secondary">
            <GitHub />
          </IconButton>
        </a>
      </Box>
    </Card>
  );
  // })
};

export default ProjectCard;
