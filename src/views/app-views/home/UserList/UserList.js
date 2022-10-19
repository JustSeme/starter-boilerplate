import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { getUsers } from 'redux/thunk/Clients';
import { deleteUserActionCreator } from 'redux/actions/Clients';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

class UserList extends Component {
	componentDidMount() {
		this.props.getUsers()
	}

	state = {
		users: this.props.usersData,
		userProfileVisible: false,
		selectedUser: null
	}

	onDeleteUser = userId => {
		this.props.deleteUser(userId)
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
		});
	}

	onRow = (record) => {
		return {
			onClick: () => this.props.history.push(`${APP_PREFIX_PATH}/home/main/clients/edit_profile/${record.id}`)
		}
	}

	render() {
		const { userProfileVisible, selectedUser } = this.state;

		if (this.props.isFetching) {
			return (
				<div style={{ 'textAlign': 'center' }}>
					<Spin size='large' />
				</div>
			)
		}

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Role',
				dataIndex: 'role',
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: email => (
					<span>{email}</span>
				),
				sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
			},
			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.onDeleteUser(elm.id) }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{ 'padding': '0px' }}>
				<Table onRow={this.onRow} columns={tableColumns} dataSource={this.props.usersData} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={() => { this.closeUserProfile() }} />
			</Card>
		)
	}
}


const mapStateToProps = ({ clients }) => {
	const { usersData, isFetching } = clients;
	return { usersData, isFetching }
}

const mapDispatchToProps = {
	getUsers: getUsers,
	deleteUser: deleteUserActionCreator
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList))
