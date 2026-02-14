import { Embeddings } from '@langchain/core/embeddings'
import type { MkEmb, EmbeddingsLike } from './types'

/**
 * Mock embeddings for development/testing when external APIs are unavailable
 * Generates consistent embeddings based on text hash
 */
class MockEmbeddings extends Embeddings {
  async embedQuery(text: string): Promise<number[]> {
    return this.generateEmbedding(text)
  }

  async embedDocuments(texts: string[]): Promise<number[][]> {
    return texts.map(text => this.generateEmbedding(text))
  }

  private generateEmbedding(text: string): number[] {
    // Simple hash function to generate consistent embeddings
    const hash = this.hashCode(text)
    const embedding: number[] = new Array(384).fill(0)
    
    // Seed the embedding with the hash
    let seed = hash
    for (let i = 0; i < embedding.length; i++) {
      seed = (seed * 9301 + 49297) % 233280
      embedding[i] = (seed / 233280) * 2 - 1 // Normalize to [-1, 1]
    }
    
    return embedding
  }

  private hashCode(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash)
  }
}

export const makeEmbeddings: MkEmb = (_cfg: any): EmbeddingsLike => {
  return new MockEmbeddings()
}
