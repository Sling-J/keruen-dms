import React, { FC, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button, Tabs, Form, Input, Select, Row, Col, DatePicker } from 'antd'
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
              initialValues={{ remember: true }}
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
          <Box className='__tab-item'>Content of Tab Pane 2</Box>
        </TabPane>
        <TabPane tab='Помещения' key='3'>
          <Box className='__tab-item'>Content of Tab Pane 3</Box>
        </TabPane>
        <TabPane tab='Ставки' key='4'>
          <Box className='__tab-item'>Content of Tab Pane 4</Box>
        </TabPane>
        <TabPane tab='Скидки' key='5'>
          <Box className='__tab-item'>Content of Tab Pane 5</Box>
        </TabPane>
        <TabPane tab='Индексация' key='5'>
          <Box className='__tab-item'>Content of Tab Pane 6</Box>
        </TabPane>
        <TabPane tab='Обеспечительный взнос' key='6'>
          <Box className='__tab-item'>Content of Tab Pane 7</Box>
        </TabPane>
      </Tabs>
    </TenantCreateWrap>
  )
}

export default TenantCreate
