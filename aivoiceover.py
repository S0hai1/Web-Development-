from pyht import Client
from pyht.client import TTSOptions
import os

# Set your user ID and API key as environment variables or directly in the code
user_id = os.getenv("fc5COY7TrkePts32gWw5ROl3nzt1")
api_key = os.getenv("c4a8dc5d220e483dac595d488f500b84")

client = Client(user_id=user_id, api_key=api_key)
options = TTSOptions(voice="s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json")

# Read text from a text file
text_file_path = "input.txt"  # Update with the correct path to your input file
with open(text_file_path, "r") as file:
    text = file.read()

# Split the text into smaller chunks (e.g., by sentences)
max_chunk_length = 500  # Adjust this value as needed
text_chunks = [text[i:i + max_chunk_length] for i in range(0, len(text), max_chunk_length)]

# Generate and save audio for each chunk
for i, text_chunk in enumerate(text_chunks):
    audio_chunks = list(client.tts(text_chunk, options))
    output_audio_path = f"output_{i}.mp3"  # Output file for this chunk
    with open(output_audio_path, "wb") as audio_file:
        for chunk in audio_chunks:
            audio_file.write(chunk)
    print(f"Audio saved as {output_audio_path}")
