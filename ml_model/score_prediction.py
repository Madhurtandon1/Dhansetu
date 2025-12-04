import joblib
import pandas as pd

class ScorePredictor:
    def __init__(self):
        self.rep_model = joblib.load("ml_model/repayment_model.pkl")
        self.inc_model = joblib.load("ml_model/income_model.pkl")
        self.label_encoders = joblib.load("ml_model/label_encoders.pkl")

        self.repayment_features = [...]
        self.income_features = [...]

    def preprocess(self, input_dict):
        df = pd.DataFrame([input_dict])
        for col, enc in self.label_encoders.items():
            df[col] = enc.transform(df[col].astype(str))
        return df

    def predict(self, input_dict):
        df = self.preprocess(input_dict)
        rep_score = float(self.rep_model.predict(df[self.repayment_features])[0])
        inc_score = float(self.inc_model.predict(df[self.income_features])[0])
        return rep_score, inc_score
