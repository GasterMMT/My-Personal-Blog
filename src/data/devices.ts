// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	XiaoMi: [
		{
			name: "XiaoMi 14",
			image: "/images/device/XiaoMi 14.png",
			specs: "Black / 16G + 1TB",
			description:
				"Flagship performance, Leica imaging, 90W HyperCharge.",
			link: "https://www.mi.com/xiaomi-14",
		},
	],
};
