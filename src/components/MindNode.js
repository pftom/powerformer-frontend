import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Python',
    children: [
      {
        name: '准备',
        children: [
          {
            name: '为什么选择Python?',
          },
          {
            name: 'Python 2还是3?',
          },
          {
            name: '安装Python3',
          },
          {
            name: '安装Python3',
          }
        ]
      },
      {
        name: '编程基础',
        children: [
          {
            name: '为什么选择Python?',
          },
          {
            name: 'Python 2还是3?',
          },
          {
            name: '安装Python3',
          },
          {
            name: '安装Python3',
          }
        ]
      },
      {
        name: '核心语法',
        children: [
          {
            name: '为什么选择Python?',
          },
          {
            name: 'Python 2还是3?',
          },
          {
            name: '安装Python3',
          },
          {
            name: '安装Python3',
          }
        ]
      },
      {
        name: '数据模型',
        children: [
          {
            name: '为什么选择Python?',
          },
          {
            name: 'Python 2还是3?',
          },
          {
            name: '安装Python3',
          },
          {
            name: '安装Python3',
          }
        ]
      },
      {
        name: '标准库',
        children: [
          {
            name: '为什么选择Python?',
          },
          {
            name: 'Python 2还是3?',
          },
          {
            name: '安装Python3',
          },
          {
            name: '安装Python3',
          }
        ]
      }
    ],
  },
];

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '100em'}}>

        <Tree 
          data={myTreeData} 
          svgSquare={svgSquare}  
          separation={{
            'siblings': 0.4,
            'nonSiblings': 0.5,
          }}
        />

      </div>
    );
  }
}

export default MyComponent;