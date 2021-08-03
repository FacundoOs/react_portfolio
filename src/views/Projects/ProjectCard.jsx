import React, { useState } from 'react'
import cx from 'clsx'
import {
  IconButton,
  CardContent,
  CardMedia,
  Card,
  Box,
  Avatar,
  Popover,
} from '@material-ui/core/'
import { GitHub, Share } from '@material-ui/icons/'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import avatar from '../../assets/projects-icon/avatar_projects.png'
import useStyles from './projectCardStyle'

const ProjectCard = ({ projects }) => {
  const cardStyles = useStyles()
  const mediaStyles = useSlopeCardMediaStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()

  const [anchor, setAnchor] = useState(false)

  const handlePopoverOpen = event => {
    setAnchor(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchor(false)
  }

  const open = Boolean(anchor)

  return (
    <Card className={cx(cardStyles.root)}>
      <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <CardMedia classes={mediaStyles} image={projects.image} />
        <Avatar className={cardStyles.avatar} src={avatar} />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={projects.name}
          />
        </CardContent>
      </Box>
      <Popover
        id="mouse-over-popover"
        anchorEl={anchor}
        open={open}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        style={{
          pointerEvents: 'none',
        }}
        disableRestoreFocus
        PaperProps={{
          style: {
            width: '16rem',
            backgroundColor: '#FFA500',
          },
        }}
      >
        <CardContent>
          <TextInfoContent
            style={{ color: 'red' }}
            classes={textCardContentStyles}
            body={projects.description}
          />
        </CardContent>
      </Popover>

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
