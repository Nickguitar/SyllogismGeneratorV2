# SyllogismGeneratorV2
JS script that generate all the 256 possible syllogisms and applies the rules to determine which are valid

## How it works

**1**. First, it generates all the possible combinations of three characters between the letters "A", "E", "I" and "O", each one representing a different categorical proposition. The result is something like ("AAA", "AAE", "AAO", ..., "EAI", "EAO", ..., "OOI", "OOO"). There are 64 (4³) possible combinations. Each of these trio is a mode of syllogism.

**2**. Then, there are four functions, figura1(modo), figura2(modo), etc., one for each syllogism figure. Each of these functions receives a mode of syllogism as input (e.g. AII), generates an argument according to the correct figure and return the argument in natural language.
E.g. if the input is AII and it is the first figure, the output is "All M is P; Some S is M; Some S is P"). 

If the input is EIO and it is the third figure, the output is "No M is P; Some M é M; Some S is not P"). 

The argument is outputed as an array.

**3**. There is another function, silogismo(modoFigura), that receives a mode and a figure of argument as input. E.g. "AII-1". This means that this argument has AII as its mode and is in the first figure. The function determines the figure of the argument and outputs the corresponding argument as a string (using one of the four previous functions). 

**4**. Finally, there is a loop that ranges over all the 64 possible modes of syllogism, and for each of them there is another loop that generates the argument corresponding to each of the 4 figures of syllogism. This generates a table with 64x4=256 syllogisms.

**5**. There are 5 functions, r1(), r2(), ... r5(), that get the list of syllogisms (generated at step 4) and return the syllogisms that doesn't follow them. 

#In a valid syllogism, the following hold:
1. The middle term is distributed in at least one premise
2. If a term is distributed in the conclusion, it is also distributed in some premise
3. Some premise must be affirmative
4. If some premise is negative, the conclusion is affirmative
5. If both premises are universal, the conclusion is also universal

So, for example, r1() returns an array with all the syllogisms in which the middle term isn't distributed in some premise; r5() returns an array with all the syllogisms in which both premises are universal but the conclusion is particular.

**6**. Lastly, there are some checkboxes corresponding to each rule so that, e.g, when you check the first checkbox, the first rule is applied, and all the syllogisms that doesn't follow it are removed from the list of syllogisms (the list generated in 4). So if you check all the checkboxes, only the 15 inconditionally valid syllogisms are shown in the table.


## Some comments

You can change the value of the variables from line 19 to 23 (in figures.js) as you want. 

Lines 27, 28 and 29 (or 31, 32 and 33) contains the major, middle and minor terms. 

You can change the highlight value (line 25) to true so that the major, middle and minor term are highlighted as you want (for this, change the color on lines 30, 34 and 38 in style.css).

By standard, the middle term is highlighted in red. You can change its color on line 26 in style.css.

But notice that variables from line 19 to 29 (figures.js) have a constant logical meaning. If you want to change them, just translate them into your language. Don't change anything else or you may break something.

![Image](https://i.imgur.com/q2WW1BK.png)
All the 256 possible syllogisms

![Image](https://i.imgur.com/FqS7WJv.png)
Only the 15 valid syllogisms.

I didn't worry about eliminating the remaining rows from the table, or making the code optimized or the page beautiful. This is just a test. 

Feel free to beaultify the page/code, and please let me know the results. 

# https://youtube.com/ÉLógicoPô =)

