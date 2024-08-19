import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';


interface Node {
  name: string;
  children?: Node[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: Node[] = [
  {
    name: 'Folders',
    children: [{name: 'Folders'}, {name: 'Folders'}, {name: 'Folders'}],
  },
  {
    name: 'Folders',
    children: [
      {
        name: 'Sub Folder',
        children: [{name: 'Sub Folder'}, {name: 'Sub Folder'}],
      },
      {
        name: 'Sub Folder',
        children: [{name: 'Sub Folder'}, {name: 'Sub Folder'}],
      },
    ],
  },
];


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})


export class FoldersComponent {
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
