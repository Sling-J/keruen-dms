import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Box } from 'ui'
import { Button, Form, Input, Select } from 'antd'

import { PageTitle } from 'modules/common/components'

import { CreateUserParams } from 'modules/users/types'

interface UserCreateProps {
  loading: boolean
  error: any
  createUser: (body: CreateUserParams) => void
}

const formLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
}

const UserCreate: FC<UserCreateProps> = ({ loading }) => {
  const history = useHistory()

  return (
    <Form name='user_create' autoComplete='off'>
      <PageTitle
        title='Создать пользователя'
        onBackButtonClick={() => history.push('/users')}
        actions={
          <Box display='flex'>
            <Link to='/users'>
              <Button ghost danger disabled={loading} htmlType='button'>
                Отменить
              </Button>
            </Link>

            <Box ml='10px'>
              <Button type='primary' loading={loading} htmlType='submit'>
                Сохранить
              </Button>
            </Box>
          </Box>
        }
      />

      <Box padding='40px' backgroundColor='#fff'>
        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Имя'
          name='first_name'
        >
          <Input placeholder='Введите имя' />
        </Form.Item>

        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Фамилия'
          name='second_name'
        >
          <Input placeholder='Введите фамилию' />
        </Form.Item>

        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Отчество'
          name='middle_name'
        >
          <Input placeholder='Введите отчество' />
        </Form.Item>

        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Должность'
          name='job_position'
        >
          <Input placeholder='Введите должность' />
        </Form.Item>

        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Отдел'
          name='department'
        >
          <Input placeholder='Введите отдел' />
        </Form.Item>
        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Наименование компании'
          name='company_name'
        >
          <Select placeholder='Выберите компанию' />
        </Form.Item>
        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          label='Номер телефона'
          name='phone'
        >
          <Input placeholder='Введите номер телефона' />
        </Form.Item>
        <Form.Item
          labelCol={formLayout.labelCol}
          wrapperCol={formLayout.wrapperCol}
          rules={[{ type: 'email' }]}
          label='Электронная почта '
          name='email'
        >
          <Input placeholder='Введите электронную почту' />
        </Form.Item>
      </Box>
    </Form>
  )
}

export default UserCreate
