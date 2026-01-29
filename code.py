def check_even_odd():
    try:
        num = input("Enter a number: ")

        # Empty input check
        if num.strip() == "":
            print("Please enter a number")
            return

        # Convert to number
        num = float(num)

        # Integer check
        if not num.is_integer():
            print("Please enter an integer number")
            return

        num = int(num)

        # Even / Odd logic
        if num % 2 == 0:
            print(" Even Number")
        else:
            print(" Odd Number")

    except ValueError:
        print("Invalid input! Please enter a valid number.")

check_even_odd()
