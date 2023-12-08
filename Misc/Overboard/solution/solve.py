import turtle

with open("map.txt", "r") as map_file:
    map = [x.strip() for x in map_file.readlines()]

print(map)
for instruction in map:
    if instruction == "OEST":
        turtle.setheading(0)
        turtle.forward(10)
    elif instruction == "VEST":
        turtle.setheading(180)
        turtle.forward(10)
    elif instruction == "NORD":
        turtle.setheading(90)
        turtle.forward(10)
    elif instruction == "SOER":
        turtle.setheading(270)
        turtle.forward(10)
    elif instruction == "HEV":
        turtle.penup()
    elif instruction == "SENK":
        turtle.pendown()

turtle.getscreen().exitonclick()