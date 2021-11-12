type tScript = {
    [key: string]: number[];
}

class DependencyScript {
    preparedObject: tScript = {};

    constructor( list: { scriptId: number; dependencies: number[] }[] ){
        const preparedObject: tScript = {};
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
        const allDependenciesLists: tScript = {};
        for (let key in preparedObject) {
            allDependenciesLists[ key ] = this.getDependenciesList( key );
        }
        return allDependenciesLists;
    }      
}

export { DependencyScript };

