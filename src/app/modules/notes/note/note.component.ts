import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlatTreeControl } from '@angular/cdk/tree';


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
    name: 'Notebooks',
    children: [{name: 'Notebooks'}, {name: 'Notebooks'}, {name: 'Notebooks'}],
  },
  {
    name: 'Notebooks',
    children: [
      {
        name: 'Notebooks',
        children: [{name: 'Notebooks'}, {name: 'Notebooks'}],
      },
      {
        name: 'Notebooks',
        children: [{name: 'Notebooks'}, {name: 'Notebooks'}],
      },
    ],
  },
];


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})


export class NoteComponent {
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
