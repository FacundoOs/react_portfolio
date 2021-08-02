import React from 'react'
import cx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  CardContent,
  CardMedia,
  Card,
  Box,
  Avatar,
} from '@material-ui/core/'
import { GitHub, Share } from '@material-ui/icons/'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import avatar from '../../assets/avatar_projects.png'
import useStyles from './projectCardStyle'

const ProjectCard = ({ projects }) => {
  const cardStyles = useStyles()
  const mediaStyles = useSlopeCardMediaStyles()
  // const shadowStyles = useSoftRiseShadowStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()

  return (
    <Card className={cx(cardStyles.root)}>
      <Box>
        <CardMedia classes={mediaStyles} image={projects.image} />
        <Avatar className={cardStyles.avatar} src={avatar} />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={projects.name}
            // body={projects.description}
          />
        </CardContent>
      </Box>
      <Box px={2} pb={2} mt={-1}>
        {projects.link.length !== 0 ? (
          <a target="_blank" href={projects.link}>
            <IconButton color="secondary">
              <Share />
            </IconButton>
          </a>
        ) : null}
        {projects.github.length !== 0 ? (
          <a target="_blank" href={projects.github}>
            <IconButton color="secondary">
              <GitHub />
            </IconButton>
          </a>
        ) : null}
      </Box>
    </Card>
  )
}

export default ProjectCard

// const useStyles = makeStyles(() => ({
//   root: {
//     // minHeight: 460,
//     height: '100%',
//     margin: 6,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     transition: '0.2s',
//     cursor: 'pointer',
//     '&:hover': {
//       transform: 'scale(1.1)',
//     },
//   },
//   content: {
//     padding: 24,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     border: '2px solid #fff',
//     margin: '-48px 32px 0 auto',
//     '& > img': {
//       margin: 0,
//     },
//   },
// }))
