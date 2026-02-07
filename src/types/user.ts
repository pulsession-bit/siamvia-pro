import { Timestamp } from 'firebase/firestore';

export type UserRole = 'user' | 'admin' | 'expert';
export type UserStatus = 'lead' | 'prospect' | 'customer' | 'churned';

export interface UserCanonical {
    /**
     * Unique identifier (Firebase Auth UID)
     */
    uid: string;

    /**
     * Primary contact email
     */
    email: string;

    /**
     * Personal Information
     */
    displayName?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    photoURL?: string;
    nationality?: string;

    /**
     * User preferences
     */
    language?: string;
    currency?: string;

    /**
     * System Metadata
     */
    role: UserRole;
    status: UserStatus;
    source?: string;      // e.g., 'website', 'referral', 'manual_import'
    metadata?: Record<string, any>;

    /**
     * Relationships (The "Canonical Point" Aggregation)
     * Lists of document IDs referencing other collections
     */
    applicationIds: string[];  // From 'visa_applications'
    appointmentIds: string[];  // From 'appointments'

    // Timestamps
    createdAt: Timestamp | Date;
    updatedAt: Timestamp | Date;
    lastLoginAt?: Timestamp | Date;
}
