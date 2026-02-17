
CREATE TABLE card_game_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  score INT NOT NULL,
  is_win BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX idx_card_game_results_score
  ON card_game_results (score DESC);

CREATE INDEX idx_card_game_results_user
  ON card_game_results (user_id);
