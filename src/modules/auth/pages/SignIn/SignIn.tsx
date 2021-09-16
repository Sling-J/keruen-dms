import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'

import { Box, Text } from 'ui'
import { LockIcon, LogoIcon, MailIcon } from 'ui/icons'
import { styled, Theme } from 'ui/theme'

import { Form, Button, Input } from 'antd'

const SignInWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .__sign-in-container {
    box-shadow: 0 6px 12px -6px rgba(24, 39, 75, 0.12),
      0 8px 24px -4px rgba(24, 39, 75, 0.08);
    padding: 64px;
    width: 540px;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    .ant-input-affix-wrapper-lg {
      padding: 14.5px 11px;
    }

    .ant-btn-lg {
      height: 60px;
    }
  }
`

const SignIn: FC = () => {
  const theme: Theme = useTheme()

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <SignInWrap>
      <Box>
        <Box display='flex' justifyContent='center' mb='64px'>
          <LogoIcon />
        </Box>

        <Box className='__sign-in-container'>
          <Text
            as='p'
            mb='64px'
            fontSize={4}
            textAlign='center'
            fontWeight={theme.fontWeight.medium}
          >
            Войдите в систему
          </Text>

          <Form
            name='admin-sign-in'
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Не верный формат почты!',
                },
              ]}
            >
              <Input
                size='large'
                placeholder='Введите email'
                prefix={<MailIcon color={theme.color.primary} />}
              />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Введите пароль!',
                },
              ]}
            >
              <Input.Password
                size='large'
                placeholder='Введите пароль'
                prefix={<LockIcon color={theme.color.primary} />}
              />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' size='large' block>
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Box>

        <Box display='flex' justifyContent='space-between' mt='32px'>
          <Link to='/auth/admin/sign-up'>
            <Text fontSize={3} fontWeight={theme.fontWeight.medium}>
              Регистрация
            </Text>
          </Link>

          <Link to='/auth/admin/forgot-password'>
            <Text fontSize={3} fontWeight={theme.fontWeight.medium}>
              Забыли пароль?
            </Text>
          </Link>
        </Box>
      </Box>
    </SignInWrap>
  )
}

export default SignIn
