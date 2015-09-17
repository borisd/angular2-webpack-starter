Some comments using Angular2:


* The sample starter leaves a bad taste:
** No live reload
** No clear start instructions
* The webpack sample
** Has styles inlined in directive
** Lots of crud
* The idea of bootstrap and bindings feels horrible
* Lifecycle.. what is that?
* ```[(ng-model)]``` - What?
* The binding of #var seems nice, but if it was also on controller’s this.var <— great.
** If it was two way, amazing (this.var = 3)
* Everything is “import” - so why do we need Dependency Injection?
* No idea how data binding works.. it does.. 
* Why * before ng-for?
* Two way binding for input is horrible (why do we need to worry about keyup and other events?):
** ```<input #ref [value]="message" (keyup)="message = ref.value” />```