"use client";

import * as React from "react";
import { CustomLink } from "./ui/link";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center text-center">
          <h2 className="mb-2 text-2xl font-medium">Something went wrong</h2>
          <p className="mb-4 max-w-[500px] text-sm text-muted-foreground">
            We apologize for the inconvenience. Please try refreshing the page
            or contact support if the problem persists.
          </p>
          <div className="flex gap-4">
            <CustomLink
              href="/"
              variant="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Go Home
            </CustomLink>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
