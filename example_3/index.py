import tkinter as tk
import random

class TicTacToe:
    def __init__(self, master):
        self.master = master
        self.master.title("Tic Tac Toe")
        self.board = [["-" for _ in range(3)] for _ in range(3)]
        self.current_player = "X"
        self.game_over = False
        self.player_label = tk.Label(self.master, text="Player X's turn")
        self.player_label.grid(row=0, column=0, columnspan=3, padx=5, pady=5)
        self.buttons = [[None for _ in range(3)] for _ in range(3)]
        for row in range(3):
            for col in range(3):
                button = tk.Button(self.master, text="", font=("Helvetica", 24), width=2, height=1, command=lambda row=row, col=col: self.make_move(row, col))
                button.grid(row=row+1, column=col, padx=5, pady=5)
                self.buttons[row][col] = button
        self.reset_button = tk.Button(self.master, text="Reset", command=self.reset_game)
        self.reset_button.grid(row=4, column=0, columnspan=3, padx=5, pady=5)
        self.ai_enabled = tk.BooleanVar(value=False)
        self.ai_checkbox = tk.Checkbutton(self.master, text="Play against computer", variable=self.ai_enabled)
        self.ai_checkbox.grid(row=5, column=0, columnspan=3, padx=5, pady=5)

    def make_move(self, row, col):
        if self.game_over:
            return
        if self.board[row][col] != "-":
            return
        self.board[row][col] = self.current_player
        self.buttons[row][col].config(text=self.current_player)
        winner = self.check_win()
        if winner:
            self.player_label.config(text=f"Player {winner} wins!")
            self.game_over = True
            return
        if all([all(row != "-" for row in self.board[i]) for i in range(3)]):
            self.player_label.config(text="Tie!")
            self.game_over = True
            return
        self.current_player = "O" if self.current_player == "X" else "X"
        self.player_label.config(text=f"Player {self.current_player}'s turn")
        if self.ai_enabled.get() and self.current_player == "O":
            row, col = self.get_ai_move()
            self.make_move(row, col)

    def check_win(self):
        for i in range(3):
            if self.board[i][0] == self.board[i][1] == self.board[i][2] != "-":
                return self.board[i][0]
            if self.board[0][i] == self.board[1][i] == self.board[2][i] != "-":
                return self.board[0][i]
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != "-":
            return self.board[0][0]
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != "-":
            return self.board[0][2]
        return None

    def reset_game(self):
        self.board = [["-" for _ in range(3)] for _ in range(3)]
        self.current_player = "X"
        self.game_over = False
        self.player_label.config(text="Player X's turn")
        for row in range(3):
            for col in range(3):
                self.buttons[row][col].config(text="")
        if self.ai_enabled.get() and self.current_player == "O":
            row, col = self.get_ai_move()
            self.make_move(row, col)

def get_ai_move(self):
    # Use the minimax algorithm to get the optimal move for the AI player
    _, row, col = self.minimax(self.board, "O")
    return row, col

def minimax(self, board, player):
    # Base case: check if the game is over
    winner = self.check_win()
    if winner:
        if winner == "X":
            return -1, None, None
        elif winner == "O":
            return 1, None, None
        else:
            return 0, None, None
    # Recursive case: get the best score for each possible move and choose the best one
    if player == "O":
        best_score = -float("inf")
        for row in range(3):
            for col in range(3):
                if board[row][col] == "-":
                    board[row][col] = player
                    score, _, _ = self.minimax(board, "X")
                    board[row][col] = "-"
                    if score > best_score:
                        best_score = score
                        best_row, best_col = row, col
    else:
        best_score = float("inf")
        for row in range(3):
            for col in range(3):
                if board[row][col] == "-":
                    board[row][col] = player
                    score, _, _ = self.minimax(board, "O")
                    board[row][col] = "-"
                    if score < best_score:
                        best_score = score
                        best_row, best_col = row, col
    return best_score, best_row, best_col

