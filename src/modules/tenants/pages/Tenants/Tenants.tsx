import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Box } from 'ui'

import { Input, Table, Button } from 'antd'
import { PageTitle } from 'modules/common/components'

const { Search } = Input

const dataSource = [
  {
    key: '0',
    counterparty: 'Kinopark ТОО',
    trademark: 'Kinopark',
    category: 'Кинотеатр',
    subject: 'Кино',
    floor: 3,
    room: 12,
    payer: 'Да',
  },
  {
    key: '1',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '2',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Нет',
  },
  {
    key: '3',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '4',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Нет',
  },
  {
    key: '5',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '6',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '7',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '8',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '9',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '10',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '11',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '12',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '13',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
  {
    key: '14',
    counterparty: 'Адидас ТОО',
    trademark: 'Адидас',
    category: 'Одежда',
    subject: 'Спортивная одежда',
    floor: 2,
    room: 12,
    payer: 'Да',
  },
]

const columns = [
  {
    title: 'Контрагент',
    dataIndex: 'counterparty',
    key: 'counterparty',
    width: 200,
  },
  {
    title: 'Торговая марка',
    dataIndex: 'trademark',
    key: 'trademark',
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Тематика',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Этаж',
    dataIndex: 'floor',
    key: 'floor',
  },
  {
    title: '№ Помещения',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: 'Плательщик НДС',
    dataIndex: 'payer',
    key: 'payer',
  },
]

const Tenants: FC = () => {
  return (
    <Box>
      <PageTitle
        title='Список арендаторов'
        actions={
          <Box display='flex'>
            <Search placeholder='Поиск' allowClear style={{ width: 280 }} />

            <Box mx='10px'>
              <Button>Экспортировать</Button>
            </Box>

            <Link to='/tenants/create'>
              <Button type='primary'>Добавить арендатора</Button>
            </Link>
          </Box>
        }
      />

      <Table dataSource={dataSource} columns={columns} bordered />
    </Box>
  )
}

export default Tenants
