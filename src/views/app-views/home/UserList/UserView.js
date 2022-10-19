import React, { Component } from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import {
	MobileOutlined,
	MailOutlined,
	UserOutlined,
	CompassOutlined,
	HomeOutlined,
	LinkOutlined,
	MessageOutlined,
	ReadOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
	render() {
		const { data, visible, close } = this.props;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				visible={visible}
			>
				<div className="text-center mt-3">
					<Avatar size={80} src={data?.img} />
					<h3 className="mt-2 mb-0">{data?.name}</h3>
					<span className="text-muted">{data?.username}</span>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
					<p>
						<LinkOutlined />
						<span className="ml-3 text-dark">{data?.website}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
					</p>
					<p>
						<CompassOutlined />
						<span className="ml-3 text-dark">{data?.address.city}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Company</h6>
					<p>
						<HomeOutlined />
						<span className="ml-3 text-dark">{data?.company.name ? data?.company.name : '-'}</span>
					</p>
					<p>
						<MessageOutlined />
						<span className="ml-3 text-dark">{data?.company.catchPhrase ? data?.company.catchPhrase : '-'}</span>
					</p>
					<p>
						<ReadOutlined />
						<span className="ml-3 text-dark">{data?.company.bs ? data?.company.bs : '-'}</span>
					</p>
				</div>
			</Drawer>
		)
	}
}

export default UserView
