import React, { FC, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import {
  Button,
  Tabs,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  Table,
} from 'antd'
import { Box } from 'ui'

import { PageTitle } from 'modules/common/components'
import { styled } from 'ui/theme'

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const TenantCreateWrap = styled.div`
  .__tab-item {
    padding: 40px;
    box-sizing: border-box;
    background: #ffffff;
  }

  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: initial;
  }
`

const columns = [
  {
    title: '№ помещения',
    dataIndex: 'place',
    key: 'place',
  },
  {
    title: 'Этаж',
    dataIndex: 'floor',
    key: 'floor',
  },
  {
    title: 'Площадь',
    dataIndex: 'space',
    key: 'space',
  },
  {
    title: 'Расположение на карте',
    dataIndex: 'map',
    key: 'map',
  },
]

const dataSource = [
  {
    id: 1,
    key: 1,
    place: '1',
    floor: '4',
    space: '5 100 м2',
    map: 'Посмотреть',
  },
]

const columns2 = [
  {
    title: 'Дата начала',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Дата окончания',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Скидка',
    dataIndex: 'discount',
    key: 'discount',
  },
]

const dataSource2 = [
  {
    id: 1,
    key: 1,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    discount: '20%',
  },
  {
    id: 2,
    key: 2,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    discount: '30%',
  },
]

const columns3 = [
  {
    title: 'Платежи',
    dataIndex: 'payment',
    key: 'payment',
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Договор',
    dataIndex: 'docs',
    key: 'docs',
  },
  {
    title: 'с НДС',
    dataIndex: 'nds',
    key: 'nds',
  },
]

const dataSource3 = [
  {
    id: 1,
    key: 1,
    payment: 'АП',
    type: 'фискированная',
    docs: '3 249',
    nds: 'Да',
  },
  {
    id: 2,
    key: 2,
    payment: 'ЭП',
    type: 'фискированная',
    docs: '1 249',
    nds: 'Нет',
  },
  {
    id: 3,
    key: 3,
    payment: 'РП',
    type: 'фискированная',
    docs: '249',
    nds: 'Да',
  },
]

const columns4 = [
  {
    title: 'Дата начала',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Дата окончания',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Индексация',
    dataIndex: 'indexation',
    key: 'indexation',
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Курс',
    dataIndex: 'currency',
    key: 'currency',
  },
]

const dataSource4 = [
  {
    id: 1,
    key: 1,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    indexation: 'Нет',
    type: 'н.д',
    currency: 'н.д',
  },
  {
    id: 2,
    key: 3,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    indexation: 'Нет',
    type: 'н.д',
    currency: 'н.д',
  },
  {
    id: 3,
    key: 3,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    indexation: 'Нет',
    type: 'н.д',
    currency: 'н.д',
  },
  {
    id: 4,
    key: 4,
    startDate: '01-01-2020',
    endDate: '28-02-2021',
    indexation: 'Нет',
    type: 'н.д',
    currency: 'н.д',
  },
]

const TenantCreate: FC = () => {
  const history = useHistory()
  const [, satVal] = useState<any>()

  const onFinish = (values: any) => {
    satVal(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    satVal(errorInfo)
  }

  return (
    <TenantCreateWrap>
      <PageTitle
        title='Новая карточка арендатора'
        onBackButtonClick={() => history.push('/tenants')}
        actions={
          <Box display='flex'>
            <Link to='/tenants'>
              <Button ghost danger>
                Отменить
              </Button>
            </Link>

            <Box ml='10px'>
              <Button type='primary'>Сохранить</Button>
            </Box>
          </Box>
        }
      />

      <Tabs type='card'>
        <TabPane tab='Общая информация' key='1'>
          <Box className='__tab-item'>
            <Form
              name='basic'
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='Бренд'
                    name='brand'
                  >
                    <Input placeholder='Введите бренд' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='Категория'
                    name='brand'
                  >
                    <Select placeholder='Выберите категорию' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='Тематика'
                    name='brand'
                  >
                    <Select placeholder='Выберите тематику' />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8 }}
                    label='Директор'
                    name='brand'
                  >
                    <Input placeholder='Введите имя директора' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 8 }}
                    label='Контактный Телефон'
                    name='brand'
                  >
                    <Input placeholder='Введите e-mail' />
                  </Form.Item>

                  <Form.Item labelCol={{ span: 8 }} label='E-mail' name='email'>
                    <Input placeholder='Введите e-mail' />
                  </Form.Item>
                </Col>
              </Row>

              <Row style={{ marginTop: '72px' }}>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='Организация'
                    name='brand'
                  >
                    <Input placeholder='Введите организацию' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='Юр. адрес'
                    name='brand'
                  >
                    <Input placeholder='Введите юр. адрес' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='БИН/ИИН'
                    name='brand'
                  >
                    <Input placeholder='Введите БИН/ИИН' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='IBAN'
                    name='brand'
                  >
                    <Input placeholder='Введите IBAN' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    label='БИК'
                    name='brand'
                  >
                    <Input placeholder='Введите БИК' />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item labelCol={{ span: 12 }} label='НДС Плательщик'>
                    <Row>
                      <Col span={18}>
                        <RangePicker />
                      </Col>
                      <Col span={6}>
                        <Select value='yes'>
                          <Select.Option value='yes'>Да</Select.Option>
                          <Select.Option value='no'>Нет</Select.Option>
                        </Select>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Box>
        </TabPane>
        <TabPane tab='Договора' key='2'>
          <Box className='__tab-item'>
            <Form
              name='2'
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Col style={{ marginBottom: '72px' }}>
                <Form.Item
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                  label='Договор аренды №16-ОД-090 от 03.05.2016г., этаж 4, №'
                  name='brand'
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                  label='Доп. соглашение  №1 к договору аренды №16-ОД-090'
                  name='brand'
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                  label='Описание ДС'
                  name='brand'
                >
                  <Input placeholder='Введите текст' />
                </Form.Item>
              </Col>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 4 }}
                label='Дата Акт приема-передачи помещения'
                name='brand'
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 4 }}
                label='Дата начала начисления АП'
                name='brand'
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 4 }}
                label='Дата начала начисления ЭП'
                name='brand'
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 4 }}
                label='Дата начала начисления РП'
                name='brand'
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Form>
          </Box>
        </TabPane>
        <TabPane tab='Помещения' key='3'>
          <Box className='__tab-item'>
            <Table columns={columns} dataSource={dataSource} />
          </Box>
        </TabPane>
        <TabPane tab='Ставки' key='4'>
          <Box className='__tab-item'>
            <Form
              name='2'
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8 }}
                    label='Договор №1'
                    name='brand'
                  >
                    <RangePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    labelCol={{ span: 8 }}
                    label='в USD в год'
                    name='brand'
                  >
                    <Input placeholder='Введите курс' />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                label='Таблица'
              >
                <Table
                  dataSource={dataSource3}
                  columns={columns3}
                  pagination={false}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 12 }}
                label='База для расчета ПР'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 12 }}
                label='Догоовра для расчета базы ПР'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>
            </Form>
          </Box>
        </TabPane>
        <TabPane tab='Скидки' key='5'>
          <Box className='__tab-item'>
            <Table columns={columns2} dataSource={dataSource2} />
          </Box>
        </TabPane>
        <TabPane tab='Индексация' key='6'>
          <Box className='__tab-item'>
            <Form
              name='2'
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                label='Индексация Договоров'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                label='Курс по договору'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                label='Дополнительные условия по индексациии'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>

              <Form.Item>
                <Table dataSource={dataSource4} columns={columns4}/>
              </Form.Item>
            </Form>
          </Box>
        </TabPane>
        <TabPane tab='Обеспечительный взнос' key='7'>
          <Box className='__tab-item'>
            <Form
              name='2'
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 8 }}
                label='Обеспечительный взнос'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 8 }}
                label='Тип'
                name='brand'
              >
                <Select placeholder='Выберите' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 8 }}
                label='В размере'
                name='brand'
              >
                <Select placeholder='Выберите' />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 8 }}
                label='Сумма'
                name='brand'
              >
                <Input placeholder='Введите текст' />
              </Form.Item>
            </Form>
          </Box>
        </TabPane>
      </Tabs>
    </TenantCreateWrap>
  )
}

export default TenantCreate
