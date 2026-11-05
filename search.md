<!--  1. Array Methods

What does each method do?

يعني وظيفة كل Method وإيه اللي بتعمله في الـ Array.

What does each method return?

يعني نوع القيمة اللي بترجعها كل Method بعد التنفيذ.

What does pop() return when the array is empty?

بترجع `undefined` لأن مفيش عنصر يتحذف.

 2. const with Arrays and Objects

Can you change an array’s elements or an object’s properties when it is declared with const?

أيوه، تقدر تعدل العناصر والخصائص عادي؛ لأن `const` بتمنع إعادة تعيين المتغير، مش تعديل محتواه.

How is modifying a value different from reassigning the variable?

- Modifying: تغيير المحتوى الداخلي.
- Reassigning: تغيير قيمة المتغير بالكامل.

 3. Function Declaration vs Function Expression

What is the difference?

- Function Declaration: تعريف Function بشكل مباشر.
- Function Expression: تخزين Function داخل متغير.

Can you call each one before the line where it is defined?

- Function Declaration: أيوه، بسبب Hoisting.
- Function Expression باستخدام `const`: لأ، لازم تتعرف الأول بسبب Temporal Dead Zone.

 4. Arrow Functions

What is the difference between an implicit return and an explicit return?

- Implicit Return: إرجاع القيمة تلقائياً بدون كتابة `return`.
- Explicit Return: إرجاع القيمة باستخدام كلمة `return`.

How do you return an object using an arrow function?

بنحط الـ Object بين أقواس `()` علشان JavaScript تميّزه عن جسم الـ Function.

 5. Parameters vs Arguments

What is the difference between a parameter and an argument?

- Parameter: متغير بنكتبه في تعريف الـ Function.
- Argument: قيمة بنبعتها وقت استدعاء الـ Function.

 6. Function Return

What does a function return when it has no return statement?

بترجع `undefined` تلقائياً.

Does console.log() return the value it displays?

لأ، هي بتعرض القيمة في الـ Console، لكن مش بترجعها. والـ Return بتاعها `undefined`. -->