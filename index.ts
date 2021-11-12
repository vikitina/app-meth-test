import { list } from './list-dependencies';
import { DependencyScript } from './dependency-script';

let inst = new DependencyScript(list);

console.log(inst.preparedObject);

console.log(`1: ${ inst.getDependenciesList(1) }`);
console.log(`9: ${ inst.getDependenciesList(9) }`);
console.log(`--------------All Dependencies----------------------`);
const allDependenciesLists = inst.getAllDependenciesLists();
for (let key in allDependenciesLists){
    console.log( `${key} --- ${allDependenciesLists[ key ]}` );
}