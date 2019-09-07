import pickle

# # Save to file in the current working directory
pkl_filename = "pickle_model_new.pkl"

client_data = [[64767, 80, 35], # input 1
               [100000, 100, 100]] # input 2

# Load from file
with open(pkl_filename, 'rb') as file:
    pickle_model = pickle.load(file)
for i, score in enumerate(pickle_model.predict(client_data)):

       print("Predicted happiness score for Client data: {:,.2f}".format(score))
