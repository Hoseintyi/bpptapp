export class Model
{
user: any ; 
items: any[]=[];

constructor()
{
this.user= 'hosein';
this.items=
[
{action: 'ashpazi', done: false},
{action: 'barname nvisi', done: true},
{action: 'zendegaani', done: false}
];
}
}

export class TodoItem
{
action;
done;
constructor(action:string, done:boolean)
{
this.action=action;
this.done=done;
}
}