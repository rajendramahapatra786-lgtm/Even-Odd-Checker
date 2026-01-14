def even_odd(num):
    if num % 2 == 0:
        return "Even number"
    else:
        return "Odd number"


number = int(input("Enter a number: "))
print(even_odd(number))
