type tnewObj = {
    [key: string]: number[];
}

class DependencyScript {
    preparedObject: tnewObj = {};

    constructor( list: { scriptId: number; dependencies: number[] }[] ){
        const preparedObject: tnewObj = {};
        list.forEach( function(item, i) {
            preparedObject[ list[i].scriptId ] = list[i].dependencies;
        });
        this.preparedObject = preparedObject;
    }

    getDependenciesList( scriptId: string | number) {
        const dependencies: number[] = [];
        const preparedObject = this.preparedObject;
        getDependencies(scriptId);
            
        function getDependencies(scriptId: string | number){
                
            for (let element of preparedObject[scriptId]) {
                if (!dependencies.includes(element)){
                    if (preparedObject[element]) {
                        getDependencies(element);
                    }
                    dependencies.push(element);
                }
            }
        }
        return dependencies;
    }
    getAllDependenciesLists() {
        const preparedObject = this.preparedObject;
        const allDependenciesLists: tnewObj = {};
        for (let key in preparedObject) {
            allDependenciesLists[ key ] = this.getDependenciesList( key );
        }
        return allDependenciesLists;
    }      
}

export { DependencyScript };

