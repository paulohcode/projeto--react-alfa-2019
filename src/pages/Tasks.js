import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import fakeAuth from '../helpers/fake-auth';
import axios from 'axios';


// const TASKS = [
//     {
//         id: 1,
//         title: 'Aprender React Js 1',
//         description: 'Aprendemos na primeira aula'
//     },
//     {
//         id: 2,
//         title: 'Aprender React Router 2',
//         description: 'Aprendemos na segunda aula'
//     },
//     {
//         id: 3,
//         title: 'Aprender a ficar Rico 10000000',
//         description: 'Fazer medicina'
//     }
// ]

class Tasks extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const { data } = response;
                this.setState({
                    tasks: data
                })

            })
            .catch(err => {
                console.warn(err)
            })
    }

    renderTasks = () => {
        const { tasks } = this.state;
        const tasksItems = tasks.map(task => {
            return (
                <tr>
                    <td>{task.id}</td>
                    <td>
                    <Link to={'/tasks/' + task.id}>
                        {task.title}
                    </Link>
                    </td>
                    <td>{task.userId}</td>
                    <td>{task.completed ? 'sim' : 'Não'}</td>
                </tr>
            )
        });

        return tasksItems;
    }

    renderTasksDescription = (routeProps) => {

        const { tasks} = this.state;

        const taskId = parseInt(routeProps.match.params.taskId);

        const task = tasks.find((task) => {

            return task.id === taskId;

        })

        if (!task) {
            return (
                <p>Errrrouuuuuuuuuuuu</p>
            )
        }

        return (
            <p>
                {task.id} - {task.title} - {task.completed ? 'Sim' : 'Não'}
            </p>
        )
    }

    onSairClick = () => {
        fakeAuth.setAuthenticated(false)
        this.props.history.push('/login')
    }


    render() {
        return (
            <div>
                <Button color="danger" onClick={this.onSairClick}>
                    Sair
                </Button>
                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Usuário</th>
                        <th>Concluida</th>
                    </thead>
                    <tbody>
                        {this.renderTasks()}
                    </tbody>
                </Table>

                <br />

                <div>
                    <Route path="/tasks/:taskId" render={this.renderTasksDescription} />
                </div>
            </div>
        )
    }
}

export default Tasks;