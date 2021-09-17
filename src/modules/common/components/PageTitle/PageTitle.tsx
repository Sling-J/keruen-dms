import React, { FC, ReactNode } from 'react'

import { ArrowBackIcon } from 'ui/icons'
import { Box, Text } from 'ui'

interface PageTitleProps {
  title: string
  actions: ReactNode
  onBackButtonClick?: VoidFunction
}

const PageTitle: FC<PageTitleProps> = ({
  title,
  onBackButtonClick,
  actions,
}) => {
  return (
    <Box
      mb='24px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box display='flex' alignItems='center'>
        {onBackButtonClick && (
          <Text
            as='p'
            fontSize='0px'
            mr='8px'
            onClick={onBackButtonClick}
            style={{ cursor: 'pointer' }}
          >
            <ArrowBackIcon color='black' />
          </Text>
        )}
        <Text as='p' fontSize={3} lineHeight='28px'>
          {title}
        </Text>
      </Box>

      {actions}
    </Box>
  )
}

export default PageTitle
