import Utils from '../helpers/utils.js';

class Tasks {
    constructor() {
        this.defaultTasks = [
            {
                id: Utils.generateID(),
                title: 'Task 1',
                status: 'In Progress',
                description: 'None'
            },
            {
                id: Utils.generateID(),
                title: 'Task 2',
                status: 'In Progress',
                description: 'None'
            },
            {
                id: Utils.generateID(),
                title: 'Task 3',
                status: 'In Progress',
                description: 'None'
            },
            {
                id: Utils.generateID(),
                title: 'Task 4',
                status: 'In Progress',
                description: 'None'
            },
            {
                id: Utils.generateID(),
                title: 'Task 5',
                status: 'In Progress',
                description: 'None'
            }
        ];
    }

    static setTasksToLS(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasksFromLS() {
        return JSON.parse(localStorage.getItem('tasks')) || this.defaultTasks && Tasks.setTasksToLS(this.defaultTasks);
    }
}

export default Tasks;