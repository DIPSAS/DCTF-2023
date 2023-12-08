import turtle

"""
Utility to make the directions for the challenge.
"""

turtle.pendown()

def north():
    turtle.setheading(90)
    turtle.forward(10)
    print("NORD")

def east():
    turtle.setheading(0)
    turtle.forward(10)
    print("OEST")

def south():
    turtle.setheading(270)
    turtle.forward(10)
    print("SOER")

def west():
    turtle.setheading(180)
    turtle.forward(10)
    print("VEST")

def up():
    turtle.penup()
    print("HEV")

def down():
    turtle.pendown()
    print("SENK")

screen = turtle.getscreen()
screen.onkeypress(north, "Up")
screen.onkeypress(east, "Right")
screen.onkeypress(south, "Down")
screen.onkeypress(west, "Left")
screen.onkeypress(up, "u")
screen.onkeypress(down, "d")
screen.listen()
screen.exitonclick()