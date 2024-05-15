#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let todoList: string [] = [];
let conditions = true;

console.log(chalk.blueBright.bold("Welcome to iqrz's - Todolist Application"))

let main = async () =>{
    while(conditions){
        let option =await inquirer.prompt([
            {
                name:"choices",
                type:"list",
                message:"Select an option you want to do",
                choices:["Add task","Delete Task","Update Task","View Todo-List","Exit"],
            }
        ]);
        if(option.choices === "Add task"){
            await addtask()
        }
        else if(option.choices === "Delete Task"){
            await deletetask()
        }
        else if(option.choices === "Update Task"){
            await updatetask()
        }
        else if(option.choices ==="View Todo-List"){
            await viewTask()
        }
        else if(option.choices === "Exit"){
            conditions = false;
        }
    }
}
// function to Add task //
let addtask = async() =>{
    let newtask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task :"
        }
    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in Todo-List`)
}

// function to view all Todo-List tasks
let viewTask = () =>{
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) =>{
        console.log(`${index+1}: ${task}`)
    })
}

// function to delete a task //

let deletetask = async ()=>{
    await viewTask()
    let taskindex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index number of the task you want to delete:",
        }
    ]);
    let deletedtask = todoList.splice(taskindex.index-1,1);
    console.log(`\n ${deletedtask} task has been deleted successfully from your todo-List`)
}

// function to update task //

let updatetask = async () =>{
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name:"Index",
            type:"number",
            message:"Enter the index no you want to update:"
        },
        {
            name:"new_task",
            type:"input",
            message:"Now enter new task name:",
        }
    ]);
    todoList[update_task_index.Index] = update_task_index.new_task
    console.log(`\n Task at index no.${update_task_index} updated successfully [for updated list check view Todo-List]`)

}

main();