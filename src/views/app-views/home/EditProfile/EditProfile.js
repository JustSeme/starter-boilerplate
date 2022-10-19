import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from 'redux/thunk/Clients';
import { changeAvatarActionCreator } from 'redux/actions/Clients';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export class EditProfile extends Component {

	avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

	refreshProfile() {
		const userId = this.props.match.params.userId ? this.props.match.params.userId : 1
		this.props.getUserProfile(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {
		if (this.props.isFetchingProfile || Object.entries(this.props.profileData).length === 0) return <Spin />

		const onFinish = () => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				message.success({ content: 'Done!', key, duration: 2 });
				this.props.history.push(`${APP_PREFIX_PATH}/home/main/clients/clients_list`)
			}, 1000);
		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		const onUploadAavater = info => {
			const key = 'updatable';
			if (info.file.status === 'uploading') {
				message.loading({ content: 'Uploading...', key, duration: 1000 });
				return;
			}
			if (info.file.status === 'done') {
				this.getBase64(info.file.originFileObj, imageUrl =>
					this.changeAvatarActionCreator(imageUrl),
				);
				message.success({ content: 'Uploaded!', key, duration: 1.5 });
			}
		};

		const onRemoveAvater = () => {
			this.props.changeAvatarActionCreator('')
		}

		return (
			<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={90} src={this.props.profileData.img} icon={<UserOutlined />} />
					<div className="ml-md-3 mt-md-0 mt-3">
						<Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
							<Button type="primary">Change Avatar</Button>
						</Upload>
						<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
					</div>
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{
								'name': this.props.profileData.name,
								'email': this.props.profileData.email,
								'username': this.props.profileData.username,
								'companyName': this.props.profileData.company.name,
								'phoneNumber': this.props.profileData.phone,
								'website': this.props.profileData.website,
								'address': `${this.props.profileData.address.street}, ${this.props.profileData.address.suite}`,
								'city': this.props.profileData.address.city,
								'postcode': this.props.profileData.address.zipcode
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{
												required: true,
												type: 'email',
												message: 'Please enter a valid email!'
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company"
											name="companyName"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phoneNumber"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ clients }) => {
	const { profileData, isFetchingProfile } = clients;
	return { profileData, isFetchingProfile }
}

export default withRouter(connect(mapStateToProps, { getUserProfile, changeAvatarActionCreator })(EditProfile))
