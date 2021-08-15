import React from 'react';
import _ from 'lodash';

import Row from './row';

import { treeList } from './data';

const treeGenerate = () => {
  const groupedByParent = _.groupBy(treeList, (node) => node.parentId);
  const treeData = {};

  debugger
  const root = _.find(treeList, (node) => {
    return !node.parentId
  });

  for (let key in groupedByParent) {
    const index = _.findIndex(treeList, (node) => {
      if (key === 'null' && node.id === root.id) {
        return true
      };

      return node.id === key
    });

    treeData[key] = {
      ...treeList[index],
      children: groupedByParent[key],
    }

  }

  console.log(treeData);

  debugger
  return _.omit(treeData, ['null']);
}


const recursiveRow = (nodesChildren, level) => {

  const subBranch = _.map(nodesChildren, (node, index) => {
    return (
      <>

        <Row
          key={node.id}
          marginLeft={level}
          isLast={index === nodesChildren.length - 1}
          label={node.label}
        >
          {node.label}
        </Row>

        {!_.isEmpty(node.children) && recursiveRow(node.children, 10 * 2)}
      </>
    )
  });

  return subBranch;
}

const preProcess = () => {

};

const Tree = (props) => {
  const treeData = treeGenerate();
  console.log(treeData);

  return (
    <div>
      {_.map(treeData, (node, index) => {
        return (
          <>
            <Row
              key={node.id}
              marginLeft={node.label === 'Root' ? 1 : 10 * 2}
              isLast={index === treeData.length - 1}
              label={node.label}
            >
              {node.label}
            </Row>
            {!_.isEmpty(node.children) && recursiveRow(node.children, 20 * 2)}
          </>
        )
      })
      }
    </div>
  )
};

export default Tree;
