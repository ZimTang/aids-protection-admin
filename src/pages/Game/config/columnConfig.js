const columnConfig = {
    static: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '竞赛名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '参与人数',
            dataIndex: 'personNum',
            key: 'personNum'
        },
        {
            title: '完成人数',
            dataIndex: 'finishNum',
            key: 'finishNum'
        },

        {
            title: '正确率',
            dataIndex: 'correct',
            key: 'correct',
            render: (text) => {
                if (text) {
                    return text + '%'
                } else {
                    return 0 + '%'
                }
            }
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return text.substring(0, 10)
            }
        }
    ]
}

export default columnConfig
