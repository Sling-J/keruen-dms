import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Box } from 'ui'
import { Button, Table, Input } from 'antd'

import { PageTitle } from 'modules/common/components'

const { Search } = Input

const dataSource = [
  {
    key: '1',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '2',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '3',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '4',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '5',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '6',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '7',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '8',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '9',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '10',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '11',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
  {
    key: '12',
    first_name: 'Вася',
    second_name: 'Пупкин',
    middle_name: 'Коля',
    department: 'Маркетинга',
    company_name: 'TOO “Pupkin”',
    job_positions: 'Дизайнер',
    phone: '+7 777 777 77 77',
  },
]

const columns = [
  {
    title: 'Имя',
    dataIndex: 'first_name',
    key: 'first_name',
    width: 200,
  },
  {
    title: 'Фамилия',
    dataIndex: 'second_name',
    key: 'second_name',
    width: 200,
  },
  {
    title: 'Отчество',
    dataIndex: 'middle_name',
    key: 'middle_name',
    width: 200,
  },
  {
    title: 'Отдел',
    dataIndex: 'department',
    key: 'department',
    width: 200,
  },
  {
    title: 'Наименование компании',
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: 'Должность',
    dataIndex: 'job_positions',
    key: 'job_positions',
    width: 200,
  },
  {
    title: 'Номер телефона',
    dataIndex: 'phone',
    key: 'phone',
  },
]

interface UsersProps {}

const Users: FC<UsersProps> = () => {
  return (
    <Box>
      <PageTitle
        title='Пользователи'
        actions={
          <Box display='flex'>
            <Search placeholder='Поиск' allowClear style={{ width: 280 }} />

            <Box mx='10px'>
              <Button>Экспортировать</Button>
            </Box>

            <Link to='/users/create'>
              <Button type='primary'>Добавить арендатора</Button>
            </Link>
          </Box>
        }
      />

      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1500 }}
        bordered
      />
    </Box>
  )
}

export default Users
