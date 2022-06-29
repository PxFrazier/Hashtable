class HashTable
{
	#hash(key, size)
	{
		let hashedKey = 0;
		for(let i = 0; i < key.length; i++)
			hashedKey += key.charCodeAt(i);
	
		return hashedKey % size;
	}

	constructor()
	{
		this.size = 20;
		this.buckets = Array(this.size);
		
		for(let i = 0; i < this.buckets.length; i++)
			this.buckets[i] = new Map();
	}
	
	insert(key, value)
	{
		let idx = this.#hash(key, this.size);
		this.buckets[idx].set(key, value);
	}
	
	remove(key)
	{
		let idx = this.#hash(key, this.size);
		let deleted = this.buckets[idx].get(key);
		this.buckets[idx].delete(key);
		
		return deleted;
	}
	
	search(key)
	{
		let idx = this.#hash(key, this.size);
		return this.buckets[idx].get(key);
	}
}
